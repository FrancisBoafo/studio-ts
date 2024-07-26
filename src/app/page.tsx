// File: src/app/page.tsx

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { 
  Server, 
  Cloud, 
  Database, 
  BarChart2, 
  PieChart,
  Activity,
  GitBranch,
  Workflow,
  Layers,
  Zap
} from 'lucide-react'

const technologies = [
  { name: 'Apache Spark', icon: Zap },
  { name: 'Snowflake', icon: Database },
  { name: 'AWS', icon: Layers },
  { name: 'Azure', icon: Server },
  { name: 'Google Cloud', icon: Cloud },
  { name: 'Kafka', icon: Activity },
  { name: 'Airflow', icon: Workflow },
  { name: 'dbt', icon: GitBranch },
  { name: 'Tableau', icon: BarChart2 },
  { name: 'Power BI', icon: PieChart },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We leverage cutting-edge technologies to deliver powerful data solutions.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5"
          >
            {technologies.map((tech) => (
              <li key={tech.name} className="flex flex-col items-center justify-center font-bold text-sm text-white">
                <FadeIn>
                  <div className="flex flex-col items-center">
                    <tech.icon className="h-8 w-8 text-white mb-2" />
                    <span className="text-sm text-white text-center">{tech.name}</span>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Transforming data into actionable insights"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe that efficient data architecture and ETL processes are the
          foundation of informed decision-making and business growth.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article 
                className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8 hover:scale-105 case-study-card"
              >
                <h3>
                  <Link href={''}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We design and implement cutting-edge data solutions tailored to your needs."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our expertise spans the entire data lifecycle, from ingestion to
          analysis, ensuring you get the most value from your data assets.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Data Architecture Design">
              We create robust, scalable data architectures that align with your
              business goals and technical requirements.
            </ListItem>
            <ListItem title="ETL Process Development">
              Our team builds efficient ETL pipelines using cutting-edge tools
              and technologies to ensure smooth data flow across your systems.
            </ListItem>
            <ListItem title="Data Warehousing">
              We implement modern data warehousing solutions that enable fast,
              reliable access to your organizations data assets.
            </ListItem>
            <ListItem title="Data Governance and Quality">
              We establish comprehensive data governance frameworks and quality
              assurance processes to maintain the integrity of your data.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}



export const metadata: Metadata = {
  description:
    'Syyft: Building modern data architectures and ETL solutions for forward-thinking businesses.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="hero-title font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Transforming Data to Help Increase Revenue and Reduce Costs.
          </h1>
          <p className="hero-description mt-6 text-xl text-neutral-600">
          At SYYFT, we harness the power of your data to drive efficiency and growth. 
          Our services are designed to unlock the full potential of your data, ensuring
          you can make informed decisions that boost revenue and cut costs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Amazon', logo: logoPhobiaDark }}
      >
        Syyft expertise in data architecture and ETL processes has
        significantly improved our data flow and analytics capabilities. Their
        solutions are robust, scalable, and perfectly aligned with our business
        needs.
      </Testimonial>

      <Services />




      <ContactSection />
    </>
  )
}