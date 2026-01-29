)
// src/stores/filterStore.js
import { atom, computed } from 'nanostores';

// Active category filter ('all' means no filter)
export const activeCategory = atom('all');

// All blog posts (set this from your collection)
export const allPosts = atom([]);

// Filtered posts based on active category
export const filteredPosts = computed(
  [activeCategory, allPosts],
  (category, posts) => {
    if (category === 'all') {
      return posts;
    }
    return posts.filter(post => 
      post.data.category === category || 
      post.data.categories?.includes(category)
    );
  }
);

// Set the active category
export function setCategory(category) {
  activeCategory.set(category);
}

// Get unique categories from all posts
export function getUniqueCategories(posts) {
  const categories = posts
    .flatMap(post => post.data.categories || [post.data.category])
    .filter(Boolean);
  return ['all', ...new Set(categories)];
}
