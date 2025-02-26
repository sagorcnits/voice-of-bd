"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

// This would typically come from your database
const news = [
  {
    id: 1,
    title: "Next.js 14 Released",
    image: "/placeholder.svg?height=100&width=200",
    content:
      "Next.js 14 introduces several groundbreaking features including Server Actions, Partial Prerendering, and more...",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    image: "/placeholder.svg?height=100&width=200",
    content:
      "As we look ahead to the future of web development, new technologies and methodologies are emerging...",
  },
  {
    id: 3,
    title: "Understanding React Server Components",
    image: "/placeholder.svg?height=100&width=200",
    content:
      "React Server Components represent a fundamental shift in how we think about building React applications...",
  },
];

export default function NewsTable() {
  const truncateText = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  const handleEdit = (id: number) => {
    console.log("Edit news with id:", id);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this news article?")) {
      console.log("Delete news with id:", id);
    }
  };

  return (
    <div className="w-full p-4">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">News Articles</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead className="w-[100px] text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((article) => (
              <TableRow key={article.id}>
                <TableCell>
                  <div className="relative w-[100px] h-[60px]">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{truncateText(article.content, 100)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(article.id)}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(article.id)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(article.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
