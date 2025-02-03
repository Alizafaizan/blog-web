
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";

// interface Params {
//   params: {
//     slug: string;
//   };
// }

// export async function generateStaticParams() {
//   const blogs = await client.fetch(`*[_type == "blog"]{
//     "slug": slug.current
//   }`);

//   return blogs.map((blog: { slug: string }) => ({
//     slug: blog.slug,
//   }));
// }

// const BlogPost = async ({ params }: Params) => {
//   const { slug } = params;

//   const data = await client.fetch(
//     `*[_type == "blog" && slug.current == $slug][0]{
//       title,
//       description,
//       "imageUrl": image.asset->url
//     }`,
//     { slug }
//   );

//   if (!data) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <h1 className="text-xl font-semibold text-gray-700">
//           Blog post not found
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Image Section */}
//         <div className="relative w-full h-64 md:h-96">
//           <Image
//             src={data.imageUrl}
//             alt={data.title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-lg"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="p-6 md:p-10">
//           <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
//             {data.title}
//           </h1>
//           <p className="text-gray-600 leading-relaxed text-base md:text-lg">
//             {data.description}
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default BlogPost;

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Comments } from "@/app/components/comments";// Move Comments to a separate component

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogs = await client.fetch(`*[_type == "blog"]{
    "slug": slug.current
  }`);

  return blogs.map((blog: { slug: string }) => ({
    slug: blog.slug,
  }));
}

const BlogPost = async ({ params }: Params) => {
  const { slug } = params;

  const data = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      description,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-xl font-semibold text-gray-700">
          Blog post not found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={data.imageUrl}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            {data.title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg ">
            {data.description}
          </p>
        </div>

        {/* Comments Section */}
        <Comments />
      </div>
    </main>
  );
};

export default BlogPost;
