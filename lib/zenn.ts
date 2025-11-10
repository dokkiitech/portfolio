export interface ZennArticle {
  title: string
  link: string
  pubDate: string
  description: string
  thumbnail?: string
}

export async function getZennArticles(username: string): Promise<ZennArticle[]> {
  try {
    const response = await fetch(`https://zenn.dev/${username}/feed`, {
      next: { revalidate: 3600 }, // 1時間ごとに再検証
    })

    if (!response.ok) {
      throw new Error('Failed to fetch Zenn feed')
    }

    const xml = await response.text()
    const articles = parseRSSFeed(xml)
    return articles
  } catch (error) {
    console.error('Error fetching Zenn articles:', error)
    return []
  }
}

function parseRSSFeed(xml: string): ZennArticle[] {
  const articles: ZennArticle[] = []

  // <item>タグを抽出
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  const items = xml.match(itemRegex)

  if (!items) return articles

  for (const item of items) {
    // 各フィールドを抽出
    const title = extractTag(item, 'title')
    const link = extractTag(item, 'link')
    const pubDate = extractTag(item, 'pubDate')
    const description = extractTag(item, 'description')

    // サムネイル画像を抽出（og:imageから）
    const thumbnailMatch = item.match(/<media:thumbnail url="([^"]+)"/)
    const thumbnail = thumbnailMatch ? thumbnailMatch[1] : undefined

    if (title && link && pubDate) {
      articles.push({
        title: decodeHTMLEntities(title),
        link,
        pubDate,
        description: stripHTMLTags(decodeHTMLEntities(description || '')),
        thumbnail,
      })
    }
  }

  return articles
}

function extractTag(xml: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\/${tagName}>`, 'i')
  const match = xml.match(regex)
  return match ? match[1].trim() : ''
}

function decodeHTMLEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
  }

  return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity)
}

function stripHTMLTags(text: string): string {
  // CDATAセクションの内容を抽出
  let cleaned = text.replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
  // HTMLタグを除去
  cleaned = cleaned.replace(/<[^>]*>/g, '')
  return cleaned.trim()
}
