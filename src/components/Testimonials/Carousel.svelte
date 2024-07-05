<script lang="ts">
  import type { Testimonial } from '$lib/types';
  import { ChevronBackOutline, ChevronForwardOutline } from 'svelte-ionicons'
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let testimonials: Testimonial[] = [];
  export let itemsToShow:number = 1;

  let currentIndex = 0;
  let x = tweened(0, { duration: 300, easing: cubicOut });

  const showNext = () => {
    currentIndex = (currentIndex + itemsToShow) % testimonials.length;
    x.set(-currentIndex * (100 / itemsToShow));
  };

  const showPrev = () => {
    currentIndex = (currentIndex - itemsToShow + testimonials.length) % testimonials.length;
    x.set(-currentIndex * (100 / itemsToShow));
  };

</script>

<div class="carousel-container">
  <div class="carousel" style="transform: translateX({$x}%)">
    {#each testimonials as testimonial}
      <figure class="testimonial" style="flex: 0 0 calc(100% / {itemsToShow})">
      <enhanced:img class="testimonial-img" src={testimonial.image} alt={testimonial.author} />
      <blockquote><p class="testimonial-text">{testimonial.text}</p></blockquote>
      <cite class="testimonial-author">&mdash; {testimonial.author}</cite>
      </figure>
    {/each}
  </div>
  <button class="arrow left" on:click={showPrev}>
    <ChevronBackOutline size={36}/>
  </button>
  <button class="arrow right" on:click={showNext}>
    <ChevronForwardOutline size={36}/>
  </button>
</div>

<style>
  .carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .carousel {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .testimonial {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1s ease;
    padding: 2.4rem 4.8rem;
  }

  .testimonial-img {
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
  }

  .testimonial-text {
    padding-top: 1.2rem;
    font-size: 1.6rem;
    line-height: 1.5;
    height: 14rem;
  }

  .testimonial-author {
    font-size: 1.6rem;
    padding: 1.4rem 0;
  }

.arrow {
    position: absolute;
    top: 50%;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    color: var(--theme-font-default);
    opacity: 1;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow.left {
    left: 0;
    z-index: 1;
  }

  .arrow.right {
    right: 0;
  }

  .carousel-container:hover .arrow {
    opacity: 1;
  }

  .arrow:hover {
    transform: scale(1.5);
  }
</style>
