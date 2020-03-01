<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="7"
            md="7"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              :counter="10"
              label="email"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="7"
            md="7"
          >
            <v-textarea
              v-model="password"
              label="password"
              :rules="PasswordRules"
              required
              auto-grow
            ></v-textarea>
          </v-col>

          <v-col
            cols="10"
            md="10"
          >
          <div class="my-2">
            <v-btn small @click="buttonCliked" :disabled=!valid>Normal</v-btn>
          </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    state: false,
    valid: false,
    password: 'iiG0mDnTIK',
    todos: [],
    PasswordRules: [
      v => !!v || 'content is required'
    ],
    email: 'admin@exemple.com',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    async buttonCliked () {
      const { username, password } = this
      try {
        const result = await this.axios.post('http://localhost:3000/api/v1/login', {
          username,
          password
        })
        this.$root.user = result.data
        this.loggedIn = true
        console.log('ça marchhe')
      } catch (error) {
        this.errorLogin = error
      }
    }
  }
}
</script>
