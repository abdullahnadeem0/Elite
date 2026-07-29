import React, { useState } from 'react';
import { Heart, Share2, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

const INSTA_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    likes: '4.8k',
    handle: '@eliteshoes_official'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    likes: '6.2k',
    handle: '@eliteshoes_official'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    likes: '9.1k',
    handle: '@eliteshoes_official'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop',
    likes: '3.5k',
    handle: '@eliteshoes_official'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
    likes: '5.9k',
    handle: '@eliteshoes_official'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    likes: '7.4k',
    handle: '@eliteshoes_official'
  }
];

export const InstagramGallery: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLikedPosts(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <section className="py-20 bg-[var(--bg-primary)] transition-colors duration-500">
      <div className="luxury-container">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent-gold)] flex items-center justify-center gap-1 mb-1">
            <Instagram className="w-4 h-4" /> #WalkWithElite
          </span>
          <h2 className="text-clamp-title font-extrabold font-outfit text-[var(--text-primary)]">
            Follow Our Global Runway
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Tag @eliteshoes_official for a chance to be featured on our official fashion feed.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTA_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden luxury-card border border-[var(--border-color)] cursor-pointer"
            >
              <img
                src={post.image}
                alt="Instagram look"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 text-white">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`p-3 rounded-full backdrop-blur-md border border-white/20 transition-transform hover:scale-110 ${
                    likedPosts.includes(post.id) ? 'bg-rose-500 text-white' : 'bg-white/20 text-white'
                  }`}
                  title="Like post"
                >
                  <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/20 transition-transform hover:scale-110"
                  title="Share post"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Handle Tag */}
              <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {post.likes} Likes
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
