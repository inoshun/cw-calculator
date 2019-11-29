<template>
  <div class="calcbox">
    <div class="calcbox_inner">
      <div>
        <h3>希望の手取り金額</h3>
        <label>
          <input type="number" placeholder="0" v-model="workerIncome" />
          <span>円</span>
        </label>
      </div>
      <button @click="calculateAmount">計算</button>
      <div>
        <h3>契約金額</h3>
        <p class="result">{{ contractAmount }} 円</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorForm",
  data() {
    return {
      workerIncome: null,
      contractAmount: 0
    };
  },
  methods: {
    calculateAmount() {
      var workerIncome = Number(this.workerIncome);

      // 契約金額（税抜き）
      var contractAmount;

      // 契約金額の確定金額（四捨五入済み）
      var contractAccurateAmount;

      // 契約金額（税込み）
      var contractTotalAmount;

      ///////// システム利用料が一律20%と仮定して契約金額（税抜き）を計算

      // クライアントが支払う金額 = contractAmount*1.1（契約金額＋消費税）
      // システム利用料 = contractAmount*1.1*0.2*1.1

      // 以下、計算式
      // workerIncome = contractAmount*1.1 - contractAmount*1.1*0.2*1.1;

      contractAmount = workerIncome / (1.1 - 1.1 * 0.2 * 1.1);
      contractAccurateAmount = Math.round(contractAmount);
      contractTotalAmount = contractAccurateAmount * 1.1;

      ///////// 契約金額（税込み）が10万円に収まっているかチェック
      if (contractTotalAmount <= 100000) {
        ///////// 10万円に収まっている場合は、契約金額（this.contractAmount＝上で求めた金額（contractAccurateAmount）
        this.contractAmount = contractAccurateAmount;
      } else {
        ///////// 10万円を超える場合は、10万円を超えた分にかかるシステム利用料を一律10%と仮定して契約金額（税抜き）を計算

        // クライアントが支払う金額 = contractAmount*1.1（契約金額＋消費税）
        // 10万円以下の部分の額にかかるシステム利用料 = 100000*0.2*1.1
        // 10万円を超える部分の額にかかるシステム利用料 = (contractAmount*1.1 - 100000)*0.1*1.1

        // 以下、計算式
        // workerIncome = contractAmount*1.1 - 100000*0.2*1.1 - (contractAmount*1.1 - 100000)*0.1*1.1;

        contractAmount =
          (workerIncome + 100000 * 0.2 * 1.1 - 100000 * 0.1 * 1.1) /
          (1.1 - 1.1 * 0.1 * 1.1);
        contractAccurateAmount = Math.round(contractAmount);
        contractTotalAmount = contractAccurateAmount * 1.1;

        ///////// 契約金額（税込み）が20万円に収まっているかチェック
        if (contractTotalAmount <= 200000) {
          ///////// 20万円に収まっている場合は、契約金額（this.contractAmount)＝上で求めた金額（contractAccurateAmount）
          this.contractAmount = contractAccurateAmount;
        } else {
          ///////// 20万円を超える場合は、20万円を超えた分にかかるシステム利用料を20%として契約金額（税抜き）を計算

          // クライアントが支払う金額 = contractAmount*1.1（契約金額＋消費税）
          // 10万円以下の部分の額にかかるシステム利用料 = 100000*0.2*1.1
          // 10万円超え、20万円以下の部分の額にかかるシステム利用料 = 100000*0.1*1.1
          // 20万円を超える部分の額にかかるシステム利用料 = (contractAmount*1.1 - 200000)*0.05*1.1

          // 以下、計算式
          // workerIncome = contractAmount*1.1 - 100000*0.2*1.1 - 100000*0.1*1.1 - (contractAmount*1.1 - 200000)*0.05*1.1;

          contractAmount =
            (workerIncome + 100000 * 0.3 * 1.1 - 200000 * 0.05 * 1.1) /
            (1.1 - 1.1 * 0.05 * 1.1);
          contractAccurateAmount = Math.round(contractAmount);
          contractTotalAmount = contractAccurateAmount * 1.1;
          this.contractAmount = contractAccurateAmount;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.calcbox {
  width: 100%;
  margin-bottom: 50px;
  padding: 70px;
  border-radius: 5px;
  background-color: $lightGray;

  &_inner {
    width: 100%;
    max-width: 280px;
    margin: auto;
    font-size: 18px;
  }
}
h3 {
  margin-bottom: 5px;
  font-size: 20px;
}
input {
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  padding: 5px 15px;
  outline: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
button {
  display: block;
  width: 150px;
  height: 50px;
  margin: 60px auto 50px;
  border-radius: 10px;
  background-color: $blue;
  color: white;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    border-radius: 40px;
  }
}
.result {
  text-align: right;
  border-bottom: 1px solid $gray;
}

@media screen and (max-width: 768px) {
  .calcbox {
    margin-bottom: 30px;
    padding: 40px 25px;

    &_inner {
      font-size: 15px;
    }
  }
  h3 {
    font-size: 18px;
  }
  button {
    margin: 50px auto 40px;
  }
}
</style>
