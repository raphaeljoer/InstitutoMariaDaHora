import {
  Container,
  About,
  Info,
  InfoContainer,
  MediaContainer,
  Projects,
  HeaderProjects,
  ProjectsContainer,
  ListProjects,
  Project,
  ProjectImage,
  ProjectTitle,
  ProjectDetails,
} from '@/styles/pages/Home';
import Image from 'next/image';

import { Navbar, HeroFullScreen } from '@/components';

import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <HeroFullScreen />
        <About>
          <InfoContainer>
            <Info>
              <h2>
                Promover o amparo e desenvolvimento social às crianças,
                adolescentes e famílias
              </h2>
              <ul>
                <li>
                  <span>Conheça o instituto</span>
                  <FiArrowRight />
                </li>

                <li>
                  <span>Conheça nossa causa</span>
                  <FiArrowRight />
                </li>
                <li>
                  <span>Conheça nossa fundadora</span>
                  <FiArrowRight />
                </li>
              </ul>
            </Info>
          </InfoContainer>
          <MediaContainer>
            <Image
              src="/images/about.jpg"
              layout="fill"
              loading="lazy"
              objectFit="contain"
            />
          </MediaContainer>
        </About>
        <Projects>
          <ProjectsContainer>
            <HeaderProjects>
              <h2>Projetos</h2>
              <span>Impactam a vida de milhares de pessoas</span>
            </HeaderProjects>
            <ListProjects>
              <Project>
                <ProjectImage>
                  <Image
                    key="dede"
                    src="/images/project-preview.jpg"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                  />
                </ProjectImage>

                <ProjectTitle>
                  Acolhimento Institucional de Crianças e Adolescentes
                </ProjectTitle>

                <ProjectDetails>
                  <div>
                    <strong>Meta de impacto</strong>
                    <span>200 crianças e adolescentes</span>
                  </div>
                  <FiArrowUpRight />
                </ProjectDetails>
              </Project>

              <Project>
                <ProjectImage>
                  <Image
                    key="dede"
                    src="/images/project-preview.jpg"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                  />
                </ProjectImage>

                <ProjectTitle>
                  Acolhimento Institucional de Crianças e Adolescentes
                </ProjectTitle>

                <ProjectDetails>
                  <div>
                    <strong>Meta de impacto</strong>
                    <span>200 crianças e adolescentes</span>
                  </div>
                  <FiArrowUpRight />
                </ProjectDetails>
              </Project>

              <Project>
                <ProjectImage>
                  <Image
                    key="dede"
                    src="/images/project-preview.jpg"
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                  />
                </ProjectImage>

                <ProjectTitle>
                  Acolhimento Institucional de Crianças e Adolescentes
                </ProjectTitle>

                <ProjectDetails>
                  <div>
                    <strong>Meta de impacto</strong>
                    <span>200 crianças e adolescentes</span>
                  </div>
                  <FiArrowUpRight />
                </ProjectDetails>
              </Project>
            </ListProjects>
          </ProjectsContainer>
        </Projects>
      </Container>
    </>
  );
}
