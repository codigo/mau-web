<script lang="ts">
	import { page } from '$app/stores';
	let links = {
		home: { path: '/', name: 'Home' },
		about: { path: '/about-me', name: 'About me' },
		journal: { path: '/journal', name: 'Journal' },
		contact: { path: '/contact', name: 'Contact me' }
	};

	let path: string;

	function getPath(currentPath: string) {
		path = currentPath;
	}

	$: getPath($page.url.pathname);
</script>

<div class="content-wrapper">
	<header class="header">
		<section class="main-nav">
			<ul class="main-nav-list">
				<li>
					<a
						class="main-nav-link {path === links.home.path ? 'active' : ''}"
						href={links.home.path}
					>
						{links.home.name}
					</a>
				</li>
				<li>
					<a
						class="main-nav-link {path === links.about.path ? 'active' : ''}"
						href={links.about.path}
					>
						{links.about.name}
					</a>
				</li>
				<li>
					<a
						class="main-nav-link {path === links.journal.path ? 'active' : ''}"
						href={links.journal.path}
					>
						{links.journal.name}
					</a>
				</li>
				<li>
					<a
						class="main-nav-link {path === links.contact.path ? 'active' : ''}"
						href={links.contact.path}
					>
						{links.contact.name}
					</a>
				</li>
			</ul>
		</section>
	</header>
</div>

<style lang="postcss">
	.content-wrapper {
		content: '';
		margin-bottom: 8cqmin;
	}
	.header {
		backdrop-filter: blur(1.2rem);
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
	}

	.main-nav {
		padding: 3.6rem 0;
	}

	.main-nav-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 4.8rem;
		justify-items: center;
	}

	.main-nav-link {
		transition: 0.25s ease;
	}

	.main-nav-list:hover {
		color: var(--theme-font-secondary);
	}

	.active {
		box-shadow: 0 2px 0 0 var(--theme-font-active-link);
	}
</style>
