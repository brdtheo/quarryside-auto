import type { BlogPost } from "@/lib/blog/types";

export type BlogPostProps = {
  thumbnailUrl: BlogPost["thumbnail_url"];
  thumbnailAlt: BlogPost["thumbnail_alt"];
  tags: BlogPost["tags"];
  title: BlogPost["title"];
  content: BlogPost["content"];
  author: BlogPost["author"];
  date: BlogPost["date"];
};
