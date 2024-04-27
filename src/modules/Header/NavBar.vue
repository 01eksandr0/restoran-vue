<template>
  <nav>
    <ul class="nav-list">
      <li>
        <a
          class="nav-link"
          href="https://www.instagram.com/nashi_sushi_bar/?igshid=NzAzN2Q1NTE%3D"
          target="_blank"
          ><svg>
            <use href="./icons.svg#icon-instagram"></use>
          </svg>
        </a>
      </li>
      <li class="shop">
        <router-link to="/shop" class="nav-link"
          >Кошик
          <svg>
            <use href="./icons.svg#icon-cart"></use>
          </svg>
        </router-link>
      </li>
      <li class="menu-btn">
        <button class="nav-link" @click="openMobailMenu">
          <svg height="20" width="20">
            <use xlink:href="./icons.svg#icon-menu"></use>
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import data from "../Header/icons.svg";
export default {
  name: "NavBar",
  props: {
    openMobailMenu: Function,
  },
  data() {
    return {
      icons: "",
    };
  },
  mounted() {
    this.icons = data;
    console.log(data);
  },
};
</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px;
  border: 1px solid #cec7ca;
  border-radius: 15px;
  color: #000;
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
  & > svg {
    height: 20px;
    width: 20px;
    transition: fill $animation-duration $animation-time-function;
  }
  &:hover,
  &:focus {
    color: $orange;
    background-color: #cec7ca;
  }
  &:hover > svg,
  &:focus > svg {
    fill: $orange;
  }
}
.shop {
  display: none;
}
@include media(tablet) {
  .nav-link {
    padding: 10px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
  .shop {
    display: block;
  }
  .menu-btn {
    display: none;
  }
}
</style>
