<template>
  <div>
    <div
      class="bg-cover banner"
      style="background-image: url(https://images.unsplash.com/photo-1520967673612-172d6e69b702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
      "
    ></div>

    <div class="container my-5">
      <h2 class="text-center pb-3">關於我們</h2>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <p>
            過去的社會，因為資訊傳遞慢與生產技術還不發達，
            人們工作時數短、生活步調慢。如今資訊科技發達，人類透過機械與電腦提昇生產能力，
            間接導致需求變大，工作時數提昇，並從日常生活壓榨出時間，許多人的生活步調也漸趨緊張。
          </p>
          <p>
            有鑑於此，PsyStore
            認為可以透過提供心理服務，提高人們的生活品質。本網站PsyStore將提供心理學相關工具與知識，希望促進現代人的心理健康。
            心理學科普部份，將以認知心理學與諮商心理學為主軸，介紹心理機制與心理學應用。
            心理學工具部份，將提供心理學測驗與相關技巧。
          </p>
          <p>
            本網站測試中。更多訊息可參考
            <a href="https://github.com/ayugioh2003/psystore">Github 連結</a>。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: '關於我們 | PsyStore',
    };
  },
};
</script>
