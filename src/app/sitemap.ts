import { MetadataRoute } from 'next';
import { allDiagnosesData } from '@/data/diagnoses-complete';
import { sopData } from '@/data/sop';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://askep.build.web.id';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/diagnosis`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sop`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kalkulator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kalkulator/infus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kalkulator/imt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kalkulator/gcs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Diagnosis pages (149 diagnoses)
  const diagnosisPages: MetadataRoute.Sitemap = allDiagnosesData.map((diagnosis) => ({
    url: `${baseUrl}/diagnosis/${diagnosis.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // SOP pages (8 SOPs)
  const sopPages: MetadataRoute.Sitemap = sopData.map((sop) => ({
    url: `${baseUrl}/sop/${sop.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...diagnosisPages, ...sopPages];
}