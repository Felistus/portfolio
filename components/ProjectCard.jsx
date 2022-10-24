import LinkIcon from "./icons/LinkIcon";
import GithubIcon from "./icons/GithubIcon";
import BitbucketIcon from "./icons/BitbucketIcon";

/* eslint-disable @next/next/no-img-element */
export default function ProjectCard({ project }) {
  return (
    <div className="rounded-lg text-center max-w-[350px] project overflow-hidden">
      <h2 className="card-title">{project.title}</h2>
      <img
        src={project.image}
        alt="responsive web icon"
        className="w-full h-full "
      />
      <div className="card-desc space-x-10  ">
        <button
          className="bg-[#D3AE4E] w-12 h-12 flex justify-center items-center rounded-full"
          title="Live Site"
        >
          <a
            href={project.live_link}
            target="_blanck"
            rel="noreferrer noopener"
          >
            <LinkIcon />
          </a>
        </button>
        <button
          className="bg-[#D3AE4E] w-12 h-12 flex justify-center text-white items-center rounded-full"
          title={
            project.versioning_tool === "github"
              ? "GitHub Repo"
              : "Bitbucket Repo"
          }
        >
          <a
            href={project.github_link}
            target="_blanck"
            rel="noreferrer noopener"
          >
            {project.versioning_tool === "github" ? (
              <GithubIcon />
            ) : (
              <BitbucketIcon />
            )}
          </a>
        </button>
      </div>
    </div>
  );
}
