const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
});

// POST new product
app.post("/api/products", async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        description,
        imageUrl,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Error creating product" });
  }
});

// DELETE product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Error deleting product" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
