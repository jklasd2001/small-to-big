<script lang="ts">
  import FavoriteCard from './favorite-card.svelte'

  const state = $state<number>(0)
</script>

<div class="container mx-auto">
  <div class="tabs tabs-lift">
    <input
      type="radio"
      name="my_tabs_3"
      class="tab"
      aria-label="Tab 1"
      checked={state === 0}
    />
    <div class="tab-content bg-base-100 border-base-300 p-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <FavoriteCard
          title="Radix UI"
          description="Radix UI is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://www.radix-ui.com/"
        />

        <FavoriteCard
          title="Park UI"
          description="Park UI is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://park-ui.com/"
        />

        <FavoriteCard
          title="Frontend Fundamentals"
          description="Frontend Fundamentals is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://frontend-fundamentals.com/"
        />

        <FavoriteCard
          title="usehooks.com"
          description="usehooks.com is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://usehooks.com/"
        />

        <FavoriteCard
          title="usehooks-ts"
          description="usehooks-ts is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://usehooks-ts.com/"
        />

        <FavoriteCard
          title="Panda CSS"
          description="Panda CSS is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://panda-css.com/"
        />

        <FavoriteCard
          title="Ark UI"
          description="Ark UI is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://ark-ui.com/"
        />

        <FavoriteCard
          title="Hero UI"
          description="Hero UI is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://www.heroui.com/"
        />

        <FavoriteCard
          title="AriaKit"
          description="AriaKit is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://ariakit.org/"
        />

        <FavoriteCard
          title="Next.js 한글 문서"
          description="Next.js 한글 문서 is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://nextjs-ko.org/docs"
        />

        <FavoriteCard
          title="Tailwind Variants"
          description="Tailwind Variants is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://www.tailwind-variants.org/"
        />

        <FavoriteCard
          title="React Google Maps"
          description="React Google Maps is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://visgl.github.io/react-google-maps/"
        />

        <FavoriteCard
          title="블로그"
          description="블로그 is a library of pre-styled components for React."
          tag={['React', 'UI', 'Components']}
          link="https://emewjin.github.io/"
        />

        <FavoriteCard
          title="React Google Maps"
          description="React Google Maps"
          tag={['React', 'UI', 'Components']}
          link="https://visgl.github.io/react-google-maps/"
        />

        <FavoriteCard
          title="데브필"
          description="데브필"
          tag={['React', 'UI', 'Components']}
          link="https://maily.so/devpill"
        />

        <FavoriteCard
          title="React Google Maps"
          description="React Google Maps"
          tag={['React', 'UI', 'Components']}
          link="https://visgl.github.io/react-google-maps/"
        />

        <FavoriteCard
          title="NextJS 페이지간 query 데이터 이동방법 Link nextrouter"
          description="NextJS 페이지간 query 데이터 이동방법 Link nextrouter"
          tag={['React', 'UI', 'Components']}
          link="https://velog.io/@jma1020/Next-NextJS-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B0%84-query-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9D%B4%EB%8F%99%EB%B0%A9%EB%B2%95-Link-nextrouter"
        />

        <FavoriteCard
          title="GeekNews"
          description="GeekNews"
          tag={['React', 'UI', 'Components']}
          link="https://news.hada.io/"
        />

        <FavoriteCard
          title="React 컴포넌트 라이브러리 소개"
          description="React 컴포넌트 라이브러리 소개"
          tag={['React', 'UI', 'Components']}
          link="https://www.youtube.com/watch?v=oqUgcxwrnSY"
        />

        <FavoriteCard
          title="Heropy"
          description="Heropy"
          tag={['React', 'UI', 'Components']}
          link="https://www.heropy.dev/"
        />
      </div>
    </div>

    <input
      type="radio"
      name="my_tabs_3"
      class="tab"
      aria-label="Tab 2"
      checked={state == 1}
    />
    <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

    <input
      type="radio"
      name="my_tabs_3"
      class="tab"
      aria-label="Tab 3"
      checked={state === 2}
    />
    <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
  </div>
</div>
