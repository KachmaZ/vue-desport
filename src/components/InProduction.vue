<template>
  <div class="in-production">
    <div class="container">
      <h1 class="prod-head">Сайт в разработке</h1>
      <p class="prod-desc">
        Получить уведомление об окончании технических работ:
      </p>
      <form action="" class="desc-form">
        <input type="email" placeholder="Ваш e-mail" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.in-production {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #ffffff;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/recreation-room.png");
  background-position: center;
  background-size: cover;

  .container {
    width: 75%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .prod-head {
      margin-bottom: 100px;

      font-family: Bodoni;
      font-style: normal;
      font-weight: normal;
      font-size: 100px;
      line-height: 111px;
    }

    .prod-desc {
      margin-bottom: 30px;

      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
    }

    form {
      justify-self: flex-start;

      width: 100%;

      display: flex;
      justify-content: center;

      ::placeholder {
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: rgba(0, 0, 0, 0.46);
      }

      input {
        width: 50%;
        height: 70px;

        margin-right: 20px;
        padding-left: 23px;

        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;

        background-color: #e8e8e8;

        border: 0;
        border-radius: 7px;
      }

      button {
        width: 15%;

        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;

        background-color: #d1dbdb;

        border: 0;
        border-radius: 7px;
      }
    }
  }
}
</style>