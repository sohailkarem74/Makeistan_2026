type TeamMember = {
  name: string;
  role: string;
  image: string;
  href: string;
  email: string;
  bio?: string;
  imagePosition?: "object-top" | "object-center" | "object-[center_60%]";
};

type TeamSectionProps = {
  title: string;
  description: string;
  featuredMember: TeamMember;
  members: TeamMember[];
};

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M5.37 3.4a2.37 2.37 0 1 1-4.74 0 2.37 2.37 0 0 1 4.74 0ZM.84 8.09h4.99V24H.84V8.09ZM8.96 8.09h4.78v2.17h.07c.67-1.26 2.3-2.59 4.73-2.59 5.06 0 6 3.33 6 7.66V24h-4.98v-7.66c0-1.83-.03-4.18-2.55-4.18-2.56 0-2.95 1.99-2.95 4.05V24H9.08V8.09h-.12Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TeamCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <article className={featured ? "" : "mx-auto w-full max-w-xs"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`${featured ? "h-80 sm:h-96" : "h-72 sm:h-80"} w-full rounded-md object-cover ${member.imagePosition ?? "object-top"}`}
        src={member.image}
        alt={member.name}
        width={826}
        height={1239}
        loading="lazy"
      />
      <div className="px-1 pt-4 text-center">
        <div className="flex items-start justify-center">
          <h2 className="text-[17px] font-bold tracking-tight text-foreground">
            {member.name}
          </h2>
        </div>
        <p className="mt-1 text-sm font-medium text-muted">{member.role}</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <a
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
            href={member.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${member.name}'s LinkedIn profile`}
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
            href={`mailto:${member.email}`}
            aria-label={`Email ${member.name}`}
            title={`Email ${member.name}`}
          >
            <EmailIcon />
          </a>
        </div>
        {member.bio && (
          <p className="mx-auto mt-6 max-w-[26rem] text-left text-sm leading-[1.75] text-[#374151]">{member.bio}</p>
        )}
      </div>
    </article>
  );
}

/** Editorial team grid based on the supplied reference layout. */
export default function TeamSection({
  title,
  description,
  featuredMember,
  members,
}: TeamSectionProps) {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-[42rem] text-lg leading-8 text-muted">{description}</p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mx-auto w-full sm:max-w-[calc((100%-1.5rem)/2)] lg:max-w-[calc((100%-3rem)/3)]">
            <TeamCard member={featuredMember} featured />
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:mt-16 sm:gap-x-10 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
