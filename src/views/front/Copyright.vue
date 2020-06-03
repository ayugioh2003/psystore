<template>
  <div>
    <div
      class="bg-cover banner"
      style="background-image: url(https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
      "
    ></div>

    <div class="container my-5">
      <h2 class="text-center mb-3">版權聲明</h2>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <p>
            此網站由 PsyStore
            保留擁有權，為練習用途，非商用。若有相關修改需求，請聯繫。網站中有使用到的素材來源，以下一一告知。
          </p>
          <ul>
            <li>
              唐鳳組圖：攝影師 江凱維。
              以創用CC「姓名標示-非商業性-相同方式分享」授權條款釋出。<a
                href="https://www.flickr.com/photos/audreyt/albums/72157714043968706/with/49820229316/"
                >Flickr 連結</a
              >
            </li>
            <li>
              商標圖案：可商用，修改，須附上原始連結，但不可販售。<a
                href="https://www.iconfinder.com/icons/3993860/brain_generator_idea_mind_power_youtube_icon"
                >iconfinder 連結</a
              >
            </li>
            <li>
              商品圖片：可商用，修改，可不附上來源。<a
                href="https://unsplash.com/license"
                >unsplash 連結</a
              >
            </li>
            <li>
              口碑推薦：輝夜姬、碳志郎、今日子這些圖片素材，取自在網路釋出的影視作品劇照、造型照，未取得授權。
              但本專案為練習網站製作用途，非商用，且沒有惡意負面引用、販賣這些素材之意圖。
              <a href="https://github.com/ayugioh2003/psystore/issues/62"
                >素材連結</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: '版權聲明 | PsyStore',
    };
  },
  data() {
    return {};
  },
};
</script>
