<template>
  <div>
    <div
      class="banner bg-cover"
      style="  background-image: url(https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
    "
    ></div>

    <div class="container my-5">
      <h2 class="text-center mb-5">酷朋清單</h2>
      <div class="row">
        <div
          class="col-md-4 mb-3"
          v-for="item in couponsInfo"
          :key="item.coupon"
        >
          <div class="card h-100">
            <img class="card-img-top" :src="item.imageUrl" :alt="item.title" />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <div class="card-text">
                <p>
                  {{ item.text }}
                </p>
              </div>
            </div>
            <div class="card-footer">
              <div class="input-group">
                <input
                  :id="item.coupon"
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="item.coupon"
                  readonly
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    @click="copyCoupon(item.coupon)"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div class="text-right mt-1">折扣 {{ item.discount }}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: '酷碰清單 | PsyStore',
    };
  },
  data() {
    return {
      couponsInfo: [
        {
          title: 'Taiwan Can Help',
          imageUrl: 'https://i.imgur.com/1qVBGsw.png',
          text: `在武漢肺炎疫情肆虐的今日，我們很幸運能在台灣這個國家，擁有醫療資源相對豐沛的環境。
                  除了自救外，台灣也是國際社會的一份子，行有餘力時也能向外援助。Taiwan
                  can help.`,
          coupon: 'TaiwanCanHelp',
          discount: 50,
        },
        {
          title: '希望武漢肺炎疫情趕快結束',
          imageUrl: 'https://i.imgur.com/iFdm0rK.jpg',
          text: `台灣曾在 2003 年受到 SARS 的侵襲，因此在武漢肺炎疫情初期就戰戰兢兢。
                  等到各國意識到武漢肺炎的嚴重性時，世界已經淪陷了。
                  希望人類能儘快控制住這場疫情，早日研發出疫苗。`,
          coupon: 'Hope_Disease_Disappear',
          discount: 50,
        },
        {
          title: '不要污名化精神疾患',
          imageUrl: 'https://i.imgur.com/ITk0DBb.png',
          text: `台灣近日，發生的很多重大刑事案件，都與精神疾患有關。
                  例如北捷隨機殺人案、小燈泡事件，還有火車刺警案。
                  這些事件都引起大量討論，像是死刑存廢、有精神疾患者的罪責等等。
                  而好的討論，應該是能讓社會往更好的地方走去。
                  希望大家能持續保持關注，而不是去污名化精神疾患。`,
          coupon: 'Dont_Discriminate_Mental_Illness',
          discount: 50,
        },
      ],
    };
  },
  methods: {
    copyCoupon(coupon) {
      const vm = this;
      const copyText = document.getElementById(coupon);
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
      vm.$store.dispatch('alertMessage/updateMessage', {
        message: '複製酷朋成功',
        status: 'success',
      });
    },
  },
};
</script>
