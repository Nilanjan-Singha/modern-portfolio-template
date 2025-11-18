import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts, learningItems } from "@/data/blogs-learning";

const ProgressBar = ({ value }: { value: number }) => (
  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
    <div className="bg-primary h-2 rounded-full transition-all"
      style={{ width: `${value}%` }}
    />
  </div>
);

const BlogsLearningSection = () => {
  return (
    <section id="blogs" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground mb-4">
            Blogs & Learning
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Sharing Knowledge & Growth
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            A collection of articles I've written and a look at what I'm
            currently learning.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="bg-card border border-border rounded-2xl flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video w-full bg-accent flex items-center justify-center">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="size-4" />
                  <span>{post.date}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 grow">
                  {post.excerpt}
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center justify-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <a
                  href={post.href}
                  className="inline-flex items-center font-medium text-sm text-primary group"
                >
                  Read More
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold tracking-tight mb-8">
            Currently Learning
          </h3>

          <div className="max-w-2xl mx-auto space-y-6">
            {learningItems.map((item) => (
              <div key={item.name} className="text-left">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium">{item.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.progress}%
                  </span>
                </div>

                <ProgressBar value={item.progress} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsLearningSection;
