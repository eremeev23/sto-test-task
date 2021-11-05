<template>
  <div class="home">
    <!-- Form to add new user -->
    <v-form class="form">
      <v-container class="v-container">
        <v-row class="mb-6">
          <v-col cols="12" md="3">
            <v-text-field
              @input="checkInputs"
              label="Имя"
              :rules="nameRules"
              v-model="new_name"
              required
              class="text-field"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              @input="checkInputs"
              label="Фамилия"
              :rules="nameRules"
              v-model="new_sec_name"
              required
              class="text-field"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              @input="checkInputs"
              :rules="emailRules"
              v-model="new_email"
              label="E-mail"
              required
              class="text-field"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              @input="checkInputs"
              :rules="urlRules"
              v-model="avatar"
              label="Avatar URL"
              required
              class="text-field"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- Add button  -->
        <button type="submit" class="add__button" @click="addUser" disabled>Добавить</button>
      </v-container>
    </v-form>
    <!-- Grid list of users  -->
    <ul class="names__list">
      <li v-for="name in names" :key="name.id">
        <v-card outlined class="user__card">
          <img :src="name.avatar" alt="" class="user__avatar" />
          <div class="user__information">
            <v-card-title> {{ name.first_name }} {{ name.last_name }} </v-card-title>

            <v-card-subtitle>
              {{ name.email }}
            </v-card-subtitle>
          </div>

          <router-link :to="{ path: `/list/${name.id}` }" class="more__link"
            >More information</router-link
          >

          <button :id="name.id" type="submit" class="delete__button" @click="deleteUser">x</button>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      names: [],
      errored: false,
      valid: false,
      new_name: "",
      new_sec_name: "",
      new_email: "",
      avatar: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 30 || "Name must be less than 10 characters",
      ],
      urlRules: [
        (value) => !!value || "URL is required.",
        (value) => this.isURL(value) || "URL is not valid",
      ]
    };
  },
  // Getting users to data
  created() {
    const axios = require("axios").default;
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => (this.names = response.data.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },

  methods: {
    //Validation before an adding
    checkInputs: function () {
      const addButton = document.querySelector(".add__button");

      if (this.new_name && this.new_sec_name && this.new_email) {
        this.valid = true;
      } else {
        this.valid = false;
      }

      if (this.valid) {
        addButton.removeAttribute("disabled");
      } else {
        addButton.setAttribute("disabled", true);
      }
    },
    //Add user method
    addUser: function () {
      if (this.valid) {
        this.names.push({
          id: this.names.length + 1,
          first_name: this.new_name,
          last_name: this.new_sec_name,
          email: this.new_email,
          avatar: this.avatar,
        });

        this.new_name = "";
        this.new_sec_name = "";
        this.new_email = "";
        this.avatar = "";
      }
    },
    //Delete user
    deleteUser: function (e) {
      const button = e.target;

      for (let i = 0; i < this.names.length; i++) {
        if (button.id == this.names[i].id) {
          this.names.splice(i, 1);
        }
      }
    },
    //Checking URL
    isURL: function (value) {
      let url;

      try {
        url = new URL(value);
      } catch (_) {
        return false;
      }

      return url.protocol === "http:" || url.protocol === "https:";
    },
  },
};
</script>

<style lang="scss">
.form {
  margin: 0 auto;
  max-width: 80%;

  .v-container {
    .add__button {
      margin: 15px 0 0;
      padding: 10px 20px;
      border-radius: 4px;
      color: #fff;
      background: #539173;
      transition: all 0.3s ease;
    }
    .add__button:hover {
      background: #22bb71;
    }

    .add__button:disabled {
      background: #8b8b8b;
    }
    .add__button:disabled:hover {
      background: #8b8b8b;
    }
  }
}

.names__list {
  list-style: none;
  margin: 0 auto;
  padding: 40px 0;
  max-width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  .user__card {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 5px 10px #919191;
    padding: 10px;

    .user__avatar {
      margin: 10px 20px;
      border-radius: 8px;
      box-shadow: 0 0 5px #929292;
    }

    .user__text {
      display: flex;
      align-items: center;
      padding: 20px 0;
    }

    .more__link {
      text-decoration: none;
      position: absolute;
      bottom: 10px;
      right: 20px;
      padding: 10px 20px;
      border-radius: 4px;
      background: #457b9d;
      color: #fff;
      transition: all 0.3s ease;
    }
    .more__link:hover {
      background: #1d3557;
    }

    .delete__button {
      opacity: 0;
      position: absolute;
      top: -5px;
      right: -5px;
      border-radius: 4px;
      padding: 3px 6px;
      text-align: center;
      color: #fff;
      background: #ff8484;
      transition: all 0.3s ease;
    }
    .delete__button:hover {
      background: #dd6161;
    }
  }

  .user__card:hover {
    .delete__button {
      opacity: 1;
    }
  }
}

@media (max-width: 440px) {
  .form {
    margin: 0 auto;
    max-width: 100%;
  }

  .names__list {
    grid-template-columns: 1fr;
    padding: 10px 0;
    margin: 0;
    grid-gap: 10px;
    width: 100%;

    .user__card {
      margin: 5px;
      padding: 5px;
      max-width: 300px;

      .user__avatar {
        margin: 10px 10px;
        max-width: 100px;
      }

      .more__link {
        padding: 10px;
        
      }

      .delete__button {
        opacity: 1;
  
      }
      
    }
  }
}
</style>
