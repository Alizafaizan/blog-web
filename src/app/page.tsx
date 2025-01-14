import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export interface Blog {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default async function Hero() {
  const data: Blog[] = await client.fetch(`*[_type == "blog"]{
    title,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((blog, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-md hover:scale-105 active:scale-100 transition-all cursor-pointer overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={720}
                    height={400}
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {blog.title}
                    </h1>
                    <p className="leading-relaxed mb-3 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
