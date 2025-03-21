import { useTranslations } from "next-intl";

import HomeSection from "@/components/HomeSection";

import BlogPost from "@/lib/blog/BlogPost";

export default function BlogPostList() {
  const t = useTranslations("home");
  return (
    <HomeSection title={t("post.title")}>
      <ul className="grid grid-cols-1 gap-4 @md/homecontainer:grid-cols-2 @3xl/homecontainer:grid-cols-3">
        <li>
          <BlogPost
            author={t("post.0.author")}
            content={t("post.0.content")}
            date={t("post.0.date")}
            tags={["Cherrier", "1990s", "France"]}
            thumbnailAlt="Cherrier Tango"
            thumbnailUrl="https://quarryside-auto-post.s3.eu-west-3.amazonaws.com/cherrier_tango.jpg"
            title={t("post.0.title")}
          />
        </li>
        <li>
          <BlogPost
            author={t("post.1.author")}
            content={t("post.1.content")}
            date={t("post.1.date")}
            tags={["Muscle car", "Gavril", "Performance", "USA"]}
            thumbnailAlt="Gavril Barstow IV"
            thumbnailUrl="https://quarryside-auto-post.s3.eu-west-3.amazonaws.com/gavril_barstow_iv.jpg"
            title={t("post.1.title")}
          />
        </li>
        <li>
          <BlogPost
            author={t("post.2.author")}
            content={t("post.2.content")}
            date={t("post.2.date")}
            tags={["Hiroshi", "Truck", "Japan"]}
            thumbnailAlt="Hiroshi Talent"
            thumbnailUrl="https://quarryside-auto-post.s3.eu-west-3.amazonaws.com/hiroshi_talent.jpg"
            title={t("post.2.title")}
          />
        </li>
      </ul>
    </HomeSection>
  );
}
