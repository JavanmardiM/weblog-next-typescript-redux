import Link from "next/link";
import getPosts from "./libs/getPosts";
import { Post } from "./models/post";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <div className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
        <header className="mb-14 flex flex-row place-content-between">
          <Link
            className="inline-block text-2xl font-black  scale-100 active:scale-100"
            href={"/"}
          >
            overreacted
          </Link>

          <span className="font-Merriweather text-xl italic">
            by <Link href={"/"}> Dan Abramov</Link>
          </span>
        </header>
        <main>
          <div className="relative -top-[10px] flex flex-col gap-8">
            {posts.map((post: Post, index: number) => {
              return (
                <Link
                  className="block py-4 hover:scale-[1.005] scale-100 active:scale-100 ease-in-out transition-all duration-150"
                  href={`/post/${post.id}`}
                >
                  <article>
                    <h2
                      className={`text-[28px] font-black dark:text-gray-300 ${
                        index === 0 ? "text-primary-70" : "text-primary-100"
                      } `}
                    >
                      {post.title}
                    </h2>
                    <p className="text-[13px] text-gray-700 dark:text-gray-300">
                      December {post.id.toString().padStart(2, "0")}, 2023
                    </p>
                    <p className="mt-1 dark:text-blue-300">{post.body}</p>
                  </article>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}