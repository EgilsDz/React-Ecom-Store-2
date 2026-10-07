var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:5173");
    });
});

var app = builder.Build();

app.UseCors("AllowReact");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

var titles = new[]
{
    "Headphones","Phone","Desktop","Laptop"
};


app.MapGet("/weatherforecast", () =>
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.MapGet("/api/products", () =>
{
    var products = new[]
    {
         new Product("1", "Phone", "monitors", 599.99m, "", "High-resolution gaming monitor with a fast refresh rate.", "This gaming monitor combines 4K resolution, a fast refresh rate, and adaptive synchronization for a smooth gaming experience.", 2024, "N/A", "3 years", ["27-inch display","High color accuracy"] ),
    };
        
    return products;
})
.WithName("GetProducts");


app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

record Product(string id, string title, string category, decimal price, string image, string short_description, string long_description, int year, string RAM, string warranty_period, string[] features)
{
    
}
