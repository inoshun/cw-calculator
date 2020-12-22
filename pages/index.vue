<template>
  <main id="main">
    <section>
      <div class="container">
        <h2>クラウドワークス用契約金額計算ツール</h2>
        <div class="explanation">
          <p>
            クラウドワークス（CrowdWorks）で固定報酬制の仕事に応募する際に入力を求められる<span>契約金額</span>を、希望の<span>手取り金額</span>（ワーカーが受け取る金額）から算出するための計算ツールです。
          </p>
          <p>
            <span>希望の手取り金額</span
            >を以下に入力し、計算ボタンをクリックしてください。<br />
            計算結果（<span>契約金額</span>）が下に表示されます。
          </p>
        </div>
        <CalculatorForm />
        <div class="explanation">
          <p>
            算出した契約金額をコピーしてクラウドワークスに戻り、応募フォームの契約金額入力欄に貼り付けましょう。<br />
            応募フォームにて自動算出される「ワーカーが受け取る金額」が、希望の手取り金額になります。
          </p>
          <p>※1円刻みで金額がずれる可能性もございますので、ご了承ください。</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CalculatorForm from "@/components/CalculatorForm.vue";
export default {
  components: {
    CalculatorForm
  }
};
</script>

<style lang="scss" scoped>
h2 {
  display: inline-block;
  margin-bottom: 50px;
  border-bottom: 3px solid $blue;
  font-style: italic;
  font-size: 24px;
  font-weight: 500;
}
.explanation {
  margin-bottom: 50px;

  p {
    margin-bottom: 20px;
    color: $gray;

    span {
      font-style: italic;
      color: $blue;
    }
    a {
      font-style: italic;
      color: inherit;
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 768px) {
  h2 {
    margin-bottom: 30px;
    border-bottom: 2px solid $blue;
    font-size: 20px;
  }
  .explanation {
    margin-bottom: 30px;

    p {
      margin-bottom: 10px;
    }
  }
}
</style>
