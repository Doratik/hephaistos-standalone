<template>
    <v-form>
        <v-container fluid>
            <v-row>
                <v-col>
                    <v-text-field
                    label="titre"
                ></v-text-field>
                </v-col>
                <v-col>
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="language"
                    ></v-combobox>
                </v-col>
                <v-col>
                    <v-btn small color="primary">Primary</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea
                    autocomplete="consigne"
                    label="Consignle"
                    ></v-textarea>
                </v-col>
                <v-col>
                    <v-textarea
                    autocomplete="unitTest"
                    label="Test"
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
export default {
  data: () => ({
    items: ['python', 'c']
  })
}
</script>
