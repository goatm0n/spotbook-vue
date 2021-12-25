<template>
<div id="user-badge-container">
    <input
      id="menu-checkbox"
      type="checkbox"
      class="menu-checkbox"
    />
    <label for="menu-checkbox" class="menu-label">
      <span>{{username}}</span>
      <div
        class="menu-toggle"
        :class="{ 'menu-toggle-checked': menuOpen }"
        v-on:click="openMenu"
      ></div>
    </label>
    <div
     v-if="menuOpen"
     id="user-menu"
     class="user-menu">
        <ul>
            <li class="menu-li">
                <div class="menu-item">
                    <span
                     class="menu-span"
                     v-on:click="toggleAccount">account</span>
                </div>
            </li>
            <li class="menu-li">
                <div class="menu-item">
                    <span
                     class="menu-span"
                     v-on:click="toggleProfile">profile</span>
                </div>
            </li>
            <li class="menu-li">
                <div class="menu-item">
                    <span
                     class="menu-span"
                     v-on:click="toggleLogout">log out</span>
                </div>
            </li>
        </ul>
    </div>
    
   
</div>
</template>

<script>
export default {
    name: "UserBadge",
    props: ["username"],
    data: function () {
        return {
            menuOpen: false
        }
    },
    methods: {
        openMenu: function () {
            this.menuOpen = !this.menuOpen;
        },
        toggleAccount: function () {
            alert("this doesn't do anything yet");
        },
        toggleProfile: function () {
            this.$emit("toggle-profile");
        },
        toggleLogout: function () {
            alert("this doesn't do anything yet");
        },
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#user-badge-container {
    float: right;
}
.menu-checkbox {
  display: none;
}

.menu-label {
  align-items: center;
  background: var(--background-color-secondary);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  justify-content: space-between;
  width: calc(var(--element-size)*1.5);
  z-index: 1;
  color: var(--text-primary-color);
}

.menu-toggle {
  cursor: pointer;
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 1.2);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
}

.menu-toggle-checked {
    background-color: var(--text-primary-color);
}

.user-menu {
    align-items: center;
    position: absolute;
    top: calc(var(--element-size)*0.55);
}

.menu-li {
    list-style-type: none;
}

.menu-item {
    color: var(--text-primary-color);
    background: var(--background-color-secondary);
    padding: calc(var(--element-size) * 0.1);
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    border-radius: var(--element-size);
    align-items: center;
    font-size: calc(var(--element-size) * 0.3);
    height: calc(var(--element-size) * 0.35);
    position: relative;
    width: calc(var(--element-size)*1.5);
    right: calc(var(--element-size)*0.65);
}

.menu-span {
    cursor: pointer;
}


</style>