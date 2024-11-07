import type { SvelteComponent } from 'svelte';

// Import all tech icons
import AWS from '../components/icons/tech/AWS.svelte';
import Docker from '../components/icons/tech/Docker.svelte';
import Git from '../components/icons/tech/Git.svelte';
import HuggingFace from '../components/icons/tech/HuggingFace.svelte';
import Ollama from '../components/icons/tech/Ollama.svelte';
import OpenAI from '../components/icons/tech/OpenAI.svelte';
import Strapi from '../components/icons/tech/Strapi.svelte';
import ESBuild from '../components/icons/tech/ESBuild.svelte';
import ViteJS from '../components/icons/tech/ViteJS.svelte';
import PostgreSQL from '../components/icons/tech/PostgreSQL.svelte';
import Supabase from '../components/icons/tech/Supabase.svelte';
import PocketBase from '../components/icons/tech/PocketBase.svelte';
import Svelte from '../components/icons/tech/Svelte.svelte';
import Express from '../components/icons/tech/Express.svelte';
import Playwright from '../components/icons/tech/Playwright.svelte';
import React from '../components/icons/tech/React.svelte';
import ReactQuery from '../components/icons/tech/ReactQuery.svelte';
import Tailwind from '../components/icons/tech/Tailwind.svelte';
import NodeJS from '../components/icons/tech/NodeJS.svelte';
import TypeScript from '../components/icons/tech/TypeScript.svelte';
import JavaScript from '../components/icons/tech/JavaScript.svelte';
import Firebase from '../components/icons/tech/Firebase.svelte';
import SQLite from '../components/icons/tech/SQLite.svelte';
import Redis from '../components/icons/tech/Redis.svelte';
import MongoDB from '../components/icons/tech/MongoDB.svelte';
import Cloudflare from '../components/icons/tech/Cloudflare.svelte';
import Python from '../components/icons/tech/Python.svelte';
import Rust from '../components/icons/tech/Rust.svelte';
import CSS from '../components/icons/tech/CSS.svelte';
import HTML5 from '../components/icons/tech/HTML5.svelte';
import ReactNative from '../components/icons/tech/ReactNative.svelte';
import Fastify from '../components/icons/tech/Fastify.svelte';
import Hono from '../components/icons/tech/Hono.svelte';
import Vitest from '../components/icons/tech/Vitest.svelte';
import Sentry from '../components/icons/tech/Sentry.svelte';
import Electron from '../components/icons/tech/Electron.svelte';
import ReactRouter from '../components/icons/tech/ReactRouter.svelte';
import Pulumi from '../components/icons/tech/Pulumi.svelte';
import Cloudinary from '../components/icons/tech/Cloudinary.svelte';

export interface TechStack {
	category: string;
	icon: new (options: { target: HTMLElement; props?: Record<string, any> }) => SvelteComponent;
	name: string;
	duplicate?: boolean;
}

export const TECH_STACK: TechStack[] = [
	{ category: 'AI', icon: HuggingFace, name: 'HuggingFace' },
	{ category: 'AI', icon: Ollama, name: 'Ollama' },
	{ category: 'AI', icon: OpenAI, name: 'OpenAI' },
	{ category: 'CMS', icon: Strapi, name: 'Strapi' },
	{ category: 'Compiler', icon: ESBuild, name: 'ESBuild' },
	{ category: 'Compiler', icon: ViteJS, name: 'ViteJS' },
	{ category: 'Database', icon: PostgreSQL, name: 'PostgreSQL' },
	{ category: 'Database', icon: SQLite, name: 'SQLite' },
	{ category: 'Database', icon: MongoDB, name: 'MongoDB' },
	{ category: 'Database', icon: Redis, name: 'Redis' },
	{ category: 'BaaS', icon: Firebase, name: 'Firebase' },
	{ category: 'BaaS', icon: Supabase, name: 'Supabase' },
	{ category: 'BaaS', icon: PocketBase, name: 'PocketBase' },
	{ category: 'Framework', icon: Svelte, name: 'Svelte' },
	{ category: 'Framework', icon: Express, name: 'Express' },
	{ category: 'Framework', icon: Fastify, name: 'Fastify' },
	{ category: 'Framework', icon: Hono, name: 'Hono' },
	{ category: 'Framework', icon: Vitest, name: 'Vitest' },
	{ category: 'Framework', icon: Playwright, name: 'Playwright' },
	{ category: 'SaaS', icon: Cloudinary, name: 'Cloudinary' },
	{ category: 'Framework', icon: Tailwind, name: 'Tailwind CSS' },
	{ category: 'Framework', icon: ReactQuery, name: 'React Query' },
	{ category: 'IaaS', icon: AWS, name: 'AWS' },
	{ category: 'IaaS', icon: Cloudflare, name: 'Cloudflare' },
	{ category: 'Infrastructure as Code', icon: Pulumi, name: 'Pulumi' },
	{ category: 'Libraries', icon: NodeJS, name: 'NodeJS' },
	{ category: 'Languages', icon: JavaScript, name: 'JavaScript' },
	{ category: 'Languages', icon: TypeScript, name: 'TypeScript' },
	{ category: 'Languages', icon: Python, name: 'Python' },
	{ category: 'Languages', icon: Rust, name: 'Rust' },
	{ category: 'Languages', icon: CSS, name: 'CSS' },
	{ category: 'Languages', icon: HTML5, name: 'HTML5' },
	{ category: 'Libraries', icon: React, name: 'React' },
	{ category: 'Libraries', icon: Electron, name: 'Electron' },
	{ category: 'Libraries', icon: ReactRouter, name: 'ReactRouter' },
	{ category: 'Software', icon: Git, name: 'Git' },
	{ category: 'Software', icon: Docker, name: 'Docker' },
	{ category: 'Software', icon: Sentry, name: 'Sentry' },
	{ category: 'Framework', icon: ReactNative, name: 'React Native' }
];

export const CHUNKS = 3;
