const SET_TOKEN = (state, payload) => {
    state.token = payload;
}

const SET_USER = (state, payload) => {
    state.user = payload;
}

const SET_STACK_EXCHANGE_ITEMS = (state, payload) => {
    state.stack_exchange_items = payload;
}

const SET_STACK_EXCHANGE_ELITE_ITEMS = (state, payload) => {
    state.stack_exchange_elite_items = payload;
}

const SET_GUILD = (state, payload) => {
    state.guild = payload;
}

const SET_GOLD = (state, payload) => {
    state.user.gold = payload; 
}

const SET_GUILD_MESSAGES = (state, payload) => {
    state.guild_messages = payload;
}

const SET_GUILDS = (state, payload) => {
    state.guilds = payload;
}

const SET_NOTIFICATIONS = (state, payload) => {
    state.notifications = payload;
}

const REMOVE_NOTIFICATIONS = (state) => {
    state.notifications = [];
}

export default {
    SET_TOKEN,
    SET_STACK_EXCHANGE_ITEMS,
    SET_STACK_EXCHANGE_ELITE_ITEMS,
    SET_GUILD,
    SET_GOLD,
    SET_USER,
    SET_GUILD_MESSAGES,
    SET_GUILDS,
    SET_NOTIFICATIONS,
    REMOVE_NOTIFICATIONS,
}