export interface Product {
  id: string;
  product_title: string;
  sub_title: string;
  picture: {
    url: string;
  };
  technology: string[];
}

export async function fetchProducts(limit?: number): Promise<Product[]> {
  const endpoint = new URL("https://dokkiitech.microcms.io/api/v1/product");
  if (limit) {
    endpoint.searchParams.append("limit", limit.toString());
  }

  try {
    const response = await fetch(endpoint.toString(), {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
      next: { revalidate: 3600 }, // Revalidate data every hour
    });

    if (!response.ok) {
      console.error("Failed to fetch products:", response.status, response.statusText);
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    const data = await response.json();

    if (Array.isArray(data.contents)) {
      return data.contents;
    } else {
      console.warn("Fetched data.contents is not an array. API response:", data);
      // Return empty array or handle as an error, instead of returning a single object
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    // Return empty array or re-throw error as appropriate for your error handling strategy
    return [];
  }
}
