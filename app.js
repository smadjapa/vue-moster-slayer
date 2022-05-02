function calculateAttack(minAttack, maxAttack){
    return Math.floor(Math.random() * (maxAttack - minAttack)) + minAttack;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods: {
        attackMonster() {
           const attackValue = calculateAttack(5, 12);
           this.monsterHealth -= attackValue;
           this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = calculateAttack(8, 15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');