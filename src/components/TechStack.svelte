<script lang="ts">
	import { onMount } from 'svelte';

  interface TechStack {
    category: string
    icon: typeof import('./icons/tech/AWS.svelte').default
    name: string
    duplicate?: boolean
  }

  import AWS from './icons/tech/AWS.svelte';
  import Docker from './icons/tech/Docker.svelte';
  import Git from './icons/tech/Git.svelte';
  import Zod from './icons/tech/Zod.svelte';
  import HuggingFace from './icons/tech/HuggingFace.svelte';
  import Ollama from './icons/tech/Ollama.svelte';
  import OpenAI from './icons/tech/OpenAI.svelte';
  import Mistral from './icons/tech/Mistral.svelte';
  import Strapi from './icons/tech/Strapi.svelte';
  import ESBuild from './icons/tech/ESBuild.svelte';
  import ViteJS from './icons/tech/ViteJS.svelte';
  import MySQL from './icons/tech/MySQL.svelte';
  import PostgreSQL from './icons/tech/PostgreSQL.svelte';
  import Supabase from './icons/tech/Supabase.svelte';
  import PocketBase from './icons/tech/PocketBase.svelte';
  import Svelte from './icons/tech/Svelte.svelte';
  import Express from './icons/tech/Express.svelte';
  import Playwright from './icons/tech/Playwright.svelte';
  import React from './icons/tech/React.svelte';
  import ReactQuery from './icons/tech/ReactQuery.svelte';
  import Tailwind from './icons/tech/Tailwind.svelte';;
  import NodeJS from './icons/tech/NodeJS.svelte';
  import TypeScript from './icons/tech/TypeScript.svelte';
  import JavaScript from './icons/tech/JavaScript.svelte';
  import Firebase from './icons/tech/Firebase.svelte';
  import SQLite from './icons/tech/SQLite.svelte';;
  import Redis from './icons/tech/Redis.svelte';
  import MongoDB from './icons/tech/MongoDB.svelte';
  import Cloudflare from './icons/tech/Cloudflare.svelte';
  import CloudflareWorkers from './icons/tech/CloudflareWorkers.svelte';
  import Netlify from './icons/tech/Netlify.svelte';
  import Python from './icons/tech/Python.svelte';
  import Rust from './icons/tech/Rust.svelte';
  import CSS from './icons/tech/CSS.svelte';
  import HTML5 from './icons/tech/HTML5.svelte';
  import ReactNative from './icons/tech/ReactNative.svelte';
  import Fastify from './icons/tech/Fastify.svelte';
  import Hono from './icons/tech/Hono.svelte';
  import Vitest from './icons/tech/Vitest.svelte';
  import Sentry from './icons/tech/Sentry.svelte';
  import Electron from './icons/tech/Electron.svelte';
  import ReactRouter from './icons/tech/ReactRouter.svelte';

  let techStack:TechStack[] = [
    {
      category: 'AI',
      icon: HuggingFace,
      name: 'HugginFace',
    },
    {
      category: 'AI',
      icon: Ollama,
      name: 'Ollama',
    },
    {
      category: 'AI',
      icon: OpenAI,
      name: 'OpenAI',
    },
    {
      category: 'AI',
      icon: Mistral,
      name: 'Mistral',
    },
    {
      category: 'CMS',
      icon: Strapi,
      name: 'Strapi',
    },
    {
      category: 'Compiler',
      icon: ESBuild,
      name: 'ESBuild',
    },
    {
      category: 'Compiler',
      icon: ViteJS,
      name: 'ViteJS',
    },
    {
      category: 'Database',
      icon: MySQL,
      name: 'MySQL',
    },
    {
      category: 'Database',
      icon: PostgreSQL,
      name: 'PostgreSQL',
    },
    {
      category: 'Database',
      icon: SQLite,
      name: 'SQLite',
    },
    {
      category: 'Database',
      icon: MongoDB,
      name: 'MongoDB',
    },
    {
      category: 'Database',
      icon: Redis,
      name: 'Redis',
    },
    {
      category: 'BaaS',
      icon: Firebase,
      name: 'Firebase',
    },
    {
      category: 'BaaS',
      icon: Supabase,
      name: 'Supabase',
    },
    {
      category: 'BaaS',
      icon: PocketBase,
      name: 'PocketBase',
    },
    {
      category: 'Framework',
      icon: Svelte,
      name: 'Svelte',
    },
    {
      category: 'Framework',
      icon: Express,
      name: 'Express',
    },
    {
      category: 'Framework',
      icon: Fastify,
      name: 'Fastify',
    },
    {
      category: 'Framework',
      icon: Hono,
      name: 'Hono',
    },
    {
      category: 'Framework',
      icon: Vitest,
      name: 'Vitest',
    },
    {
      category: 'Framework',
      icon: Playwright,
      name: 'Playwright',
    },
    {
      category: 'Framework',
      icon: Tailwind,
      name: 'Tailwind CSS',
    },
    {
      category: 'Framework',
      icon: ReactQuery,
      name: 'React Query',
    },
    {
      category: 'IaaS',
      icon: AWS,
      name: 'AWS',
    },
    {
      category: 'IaaS',
      icon: Cloudflare,
      name: 'Cloudflare',
    },
        {
      category: 'IaaS',
      icon: CloudflareWorkers,
      name: 'Cloudflare Workers',
    },
    {
      category: 'IaaS',
      icon: Netlify,
      name: 'Netlify',
    },
    {
      category: 'Languages',
      icon: JavaScript,
      name: 'JavaScript',
    },
    {
      category: 'Languages',
      icon: TypeScript,
      name: 'TypeScript',
    },
    {
      category: 'Languages',
      icon: Python,
      name: 'Python',
    },
    {
      category: 'Languages',
      icon: Rust,
      name: 'Rust',
    },
    {
      category: 'Languages',
      icon: CSS,
      name: 'CSS',
    },
    {
      category: 'Languages',
      icon: HTML5,
      name: 'HTML5',
    },
    {
      category: 'Libraries',
      icon: React,
      name: 'React',
    },
    {
      category: 'Libraries',
      icon: NodeJS,
      name: 'NodeJS',
    },
    {
      category: 'Libraries',
      icon: Electron,
      name: 'Electron',
    },
    {
      category: 'Libraries',
      icon: ReactRouter,
      name: 'ReactRouter',
    },
    {
      category: 'Libraries',
      icon: Zod,
      name: 'Zod',
    },
    {
      category: 'Software',
      icon: Git,
      name: 'Git',
    },
    {
      category: 'Software',
      icon: Docker,
      name: 'Docker',
    },
    {
      category: 'Software',
      icon: Sentry,
      name: 'Sentry',
    },
    {
      category: 'Libraries',
      icon: ReactNative,
      name: 'React Native',
    },
  ]

  function splitArrayIntoChunks<T>(arr: T[], numChunks: number) {
    const chunks: T[][] = []
    const n = arr.length;
    const chunkSize = Math.floor(n / numChunks);
    const remainder = n % numChunks;

    for (let i = 0; i < numChunks; i++) {
        let start = i * chunkSize;
        let end = start + chunkSize;
        chunks.push(arr.slice(start, end));
    }

    // Add the remaining elements to the last chunk
    chunks[numChunks - 1] = chunks[numChunks - 1].concat(arr.slice(chunkSize * numChunks));
    return chunks;
  }

  function duplicateObjectsInArray<T>(arr: T[][]): T[][] {

    arr.forEach((arrayInner) => {
      arrayInner.forEach((obj) => {
        arrayInner.push({...obj, duplicate: true})
      })
    })

    return arr
  }

  let techStackChunks = [[] as TechStack[]]
  let loading = true

  let dataAnimatedScroller: boolean;
  onMount(() => {
    loading = false
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dataAnimatedScroller = true
      techStackChunks = duplicateObjectsInArray(splitArrayIntoChunks(techStack, 3))
    } else {
      techStackChunks = splitArrayIntoChunks(techStack, 3)
    }
  })

</script>

<section class="section-tech-stack b-border">

  {#if loading}
  <div class="loading" aria-busy="{loading}">
    <span class="loader" />
  </div>
  {:else}
    <div class="tech-stack-box" data-animated={dataAnimatedScroller}>
      {#each techStackChunks as techStackChunk, idx}
        <!-- techStackChunk is an array of objects -->
        <ul class="tech-stack-box-inner" data-direction="{idx % 2 === 0 ? 'left' : 'right'}">
          {#each techStackChunk as tech}
            <li title="{tech.name}" class="tech-stack-item" aria-hidden="{!!tech.duplicate}">
              <svelte:component
                this={tech.icon}
              />
            </li>
          {/each}
        </ul>
      {/each}

    </div> <!--  end.tech-stack-box -->
  {/if}


</section>

<style lang="postcss">

  .section-tech-stack {
    padding: 12rem 0 12rem 0;
    margin-bottom: 2.4rem;
    overflow: hidden;
  }

  .tech-stack-box {
    margin: 0 auto;
    max-width: 135rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .tech-stack-box-inner {
    display: flex;
    padding: 1.2rem;
    gap: 1.2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .tech-stack-box[data-animated='true'] {
    display: unset;
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
    mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  }

  .tech-stack-box-inner[data-direction='left'] {
    --_animation-direction: forwards;
  }

  .tech-stack-box-inner[data-direction='right'] {
    --_animation-direction: reverse;
  }

  .tech-stack-box[data-animated='true'] .tech-stack-box-inner {
    flex-wrap: nowrap;
    animation: scroll
      var(--_animation-duration, 40s)
      var(--_animation-direction, forwards)
      linear
      infinite;
    width: fit-content;
  }

  .tech-stack-box[data-animated='true'] .tech-stack-box-inner:hover {
    animation-play-state: paused;
  }

  .tech-stack-item {
    display: flex;
    padding: 1.8rem;
    background-color: var(--theme-card-background-default);
    border-radius: 5px;

    & > svg {
      max-width: 6.2rem;
      min-width: 6.2rem;
      height: 6.2rem;
    }
  }

  @keyframes scroll {
    to {
      transform: translate(calc(-50%));
    }
  }


</style>
