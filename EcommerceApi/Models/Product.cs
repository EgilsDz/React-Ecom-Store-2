using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceApi.Models
{
    public class Product
    {
        public string id { get; set; } = string.Empty;
        public string title { get; set; } = string.Empty;
        public string category { get; set; } = string.Empty;
        public decimal price { get; set; }
        public string  image { get; set; } = string.Empty;
        public string short_description { get; set; } = string.Empty;
        public string long_description { get; set; } = string.Empty;
        public int year { get; set; }
        public string RAM { get; set; } = string.Empty;
        public string warranty_period { get; set; } = string.Empty;
        public string[] features { get; set; } = [];
        

    
}
    }
