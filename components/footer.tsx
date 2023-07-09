import { GithubIcon } from "lucide-react";
import { ContentWrapper } from "./content-wrapper";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="p-6 text-primary-foreground bg-primary pb-12">
      <ContentWrapper className="flex items-start md:items-end justify-start md:justify-between gap-2 flex-col md:flex-row">
        <div>
          <Logo />
          <p>One Shop for One WORLD</p>
        </div>
        <div className="flex gap-2 items-center justify-start md:justify-end">
          <div className="flex items-start md:items-end justify-center flex-col gap-1 text-secondary text-sm">
            <p>
              Fictional online marketplace built by{" "}
              <a
                href="/"
                className="text-white border-b pb-[1px] border-secondary"
              >
                LoneWolf 2023
              </a>
            </p>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};
