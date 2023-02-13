<template>
    <div class="bottom-home">
        <RouterLink class="bottom-home__press-anywhere" to="/character-list">
            <div class="container-center">OR CLICK HERE TO SEE FULL LIST</div>
        </RouterLink>
        <div class="bottom-home__credits container-center">
            Made by 
            <a
                href="https://www.linkedin.com/in/tiagomcoutinho/"
                target="_blank"
            >
                Tiago Coutinho
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.bottom-home {
    background-color: #090E12;
    min-height: 160px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    &__press-anywhere {
        background-color: red;
        color: #ffffff;
        font-weight: 700;
        text-align: right;
        font-size: 24px;
        letter-spacing: 4px;
        padding-top: 4px;
        padding-bottom: 4px;
        display: block;
        text-decoration: none;
    }
    &__credits {
        color: #FFFFFF;
        width: 100%;
        padding: 8px;
        a {
            color: #fff;
        }
    }
}
</style>