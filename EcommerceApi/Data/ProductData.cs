using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EcommerceApi.Models;

namespace EcommerceApi.Data
{
    public class ProductData
    {
        public Product[] GetProducts()
        {
            return products;
        }
        public Product[] products = new[]
         {
          new Product
         {
           id = "1",
           title = "Phone",
           category = "monitors",
           price = 599.99m,
           image = "",
           short_description = "High-resolution gaming monitor with a fast refresh rate.",
           long_description = "This gaming monitor combines 4K resolution, a fast refresh rate, and adaptive synchronization for a smooth gaming experience.",
           year = 2024,
           RAM = "N/A",
           warranty_period = "3 years",
           features = ["27-inch display","High color accuracy"]
         }
    };
    }
}