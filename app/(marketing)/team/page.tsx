import type { Metadata } from "next";

import {
  Container,
  PageHeader,
  Section,
} from "@/components/library";
import { JsonLd } from "@/components/seo";
import { getTeamPage } from "@/lib/content";
import { routes } from "@/lib/constants/routes";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

const page = getTeamPage();

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: routes.team,
});

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: page.seo.title,
          description: page.seo.description,
          path: routes.team,
          type: "AboutPage",
        })}
      />
      <PageHeader
        eyebrow={page.header.eyebrow}
        title={page.header.title}
        description={page.header.description}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Team" },
        ]}
      />

      <Section density="spacious" aria-labelledby="team-members-heading">
        <Container>
          <h2 id="team-members-heading" className="sr-only">
            Leadership
          </h2>
          <ul className="grid gap-8 md:grid-cols-2">
            {page.members.map((member) => (
              <li
                key={member.name}
                className="rounded-2xl border border-border-subtle bg-card p-6 md:p-8"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-accent">{member.role}</p>
                <div className="mt-4 space-y-1 text-sm text-foreground-secondary">
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="block outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {member.email}
                    </a>
                  ) : null}
                  {member.phone ? <p>{member.phone}</p> : null}
                </div>
                {member.bio ? (
                  <p className="mt-5 text-sm leading-relaxed text-foreground-secondary">
                    {member.bio}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>

          <h2 className="font-display mt-16 text-2xl font-semibold tracking-tight text-foreground">
            Operations
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {page.departments.map((dept) => (
              <li
                key={dept.name}
                className="rounded-xl border border-border-subtle bg-surface/40 px-5 py-4"
              >
                <p className="font-medium text-foreground">{dept.name}</p>
                {dept.email ? (
                  <a
                    href={`mailto:${dept.email}`}
                    className="mt-2 block text-sm text-foreground-secondary outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {dept.email}
                  </a>
                ) : null}
                {dept.phone ? (
                  <p className="mt-1 text-sm text-foreground-muted">{dept.phone}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
