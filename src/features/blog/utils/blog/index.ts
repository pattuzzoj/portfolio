import type { Post } from "@/features/blog/types/blog";
import type { MarkdownHeading } from "astro";

export interface Heading {
  depth: number,
  slug: string,
  text: string,
  children: Heading[],
}

function buildHeadingTree(items: MarkdownHeading[], tree = [] as any): Heading[] {
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const treeItem = tree[tree.length - 1];

    if (!treeItem) {
      tree.push({ ...item, children: [] });
      continue;
    }

    if (item.depth === treeItem.depth) {
      tree.push({ ...item, children: [] });
    } else if (item.depth > treeItem.depth) {
      treeItem.children = buildHeadingTree([item], treeItem.children);
    }
  }

  return tree;
}

interface RelatedPostsMeta {
  targetId: string;
  category: string;
}

function getRelatedPosts(posts: Post[], metadata: RelatedPostsMeta): (Post | undefined)[] {
  const relatedPosts = posts.map((post) => {
    if (post.id === metadata.targetId) {
      if (post.data.category === metadata.category) {
        return post;
      }
    }
  });

  return relatedPosts;
}

export {
  getRelatedPosts,
  buildHeadingTree
}