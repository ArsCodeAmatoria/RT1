import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePage } from "@/components/services";
import { JsonLd } from "@/components/seo";
import {
  getAllServiceSlugs,
  getRelatedServices,
  getServiceBySlug,
  getServicePath,
  getServiceRelatedProjects,
} from "@/lib/content";
import { routes } from "@/lib/constants/routes";
import {
  breadcrumbJsonLd,
  buildMetadata,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

type ServiceRouteParams = {
  slug: string;
};

type PageProps = {
  params: Promise<ServiceRouteParams>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: service.seo?.title ?? service.title,
    description: service.seo?.description ?? service.summary,
    path: getServicePath(service.slug),
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const path = getServicePath(service.slug);
  const title = service.seo?.title ?? service.title;
  const description = service.seo?.description ?? service.summary;
  const relatedServices = getRelatedServices(service.slug);
  const relatedProjects = getServiceRelatedProjects(service.slug);

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title,
            description,
            path,
          }),
          breadcrumbJsonLd([
            { label: "Home", href: routes.home },
            { label: "Services", href: routes.services },
            { label: service.title },
          ]),
          serviceJsonLd({
            name: service.title,
            description: service.summary,
            path,
            serviceType: service.title,
          }),
        ]}
      />
      <ServicePage
        service={service}
        relatedServices={relatedServices}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
