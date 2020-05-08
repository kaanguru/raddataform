<template>
  <Page>
    <ActionBar>
      <Label  text="Kuş Giriş Ekranı" col="1" />
    </ActionBar>
    <GridLayout columns="*" rows="*" >
      <RadDataForm :source="bird" :metadata="birdMetadata" :groups="groups"> </RadDataForm>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { PropertyGroup } from "nativescript-ui-dataform";
const sexes = [
  { key: "bebek", label: "Bebek" },
  { key: "erkek", label: "Erkek" },
  { key: "disi", label: "Dişi" },
];
const tepeTypes = [
  { key: "duz", label: "Düz" },
  { key: "tepeli", label: "Tepeli" },
];
const doveTypes = [
  { key: "kurenk", label: "Kürenk" },
  { key: "miski", label: "Miski" },
  { key: "arap", label: "Arap" },
  { key: "cakmakli", label: "Çakmaklı" },
  { key: "cil", label: "Çil" },
  { key: "abali_miski", label: "Abalı Miski" },
  { key: "abali_cakmakli", label: "Abalı Çakmaklı" },
];
export default {
  data() {
    return {
      bird: {
        isim: "",
        kusSiraNo: null,
        Dogum_Tarihi: "",
        Cinsiyet: "",
        Tepe: "duz",
        Turu: "",
        Sag_Kuyruk: null,
        Sol_Kuyruk: null,
        Atlama: false,
        Notlar: "",
      },
      groups: [
        Object.assign(new PropertyGroup(), {
          name: "Aynalı Kuyruk",
          collapsible: true,
          collapsed: true,
        })
      ],
      birdMetadata: {
        isReadOnly: false,
        commitMode: "Manual",
        validationMode: "OnLostFocus",
        propertyAnnotations: [
          {
            name: "isim",
            displayName: "İsim",
            validators: [
              { name: "MinimumLength", params: { length: 2, errorMessage: "İsim 2 karakterden daha kısa olamaz" } },
              { name: "MaximumLength", params: { length: 24, errorMessage: "İsim 24 karakterden daha uzun olamaz" } },
            ],
          },
          {
            name: "kusSiraNo",
            displayName: "Kuş Sıra no",
            editor: "Number",
            validators: [
              { name: "RangeValidator", params: { minimum: 1, maximum: 99, errorMessage: "Kuş sıra no 1 ile 99 arasında olabilir" } },
            ],
          },
          {
            name: "Dogum_Tarihi",
            displayName: "Doğum Tarihi",
            editor: "DatePicker",
          },
          {
            name: "Cinsiyet",
            editor: "SegmentedEditor",
            valuesProvider: sexes.map((value) => value.label),
          },
          {
            name: "Tepe",
            editor: "SegmentedEditor",
            valuesProvider: tepeTypes.map((value) => value.label),
          },
          {
            name: "Turu",
            displayName: "Türü",
            editor: "Picker",
            valuesProvider: doveTypes.map((value) => value.label),
          },
          {
            name: "Sag_Kuyruk",
            groupName: "Aynalı Kuyruk",
            displayName: "Sağ Kuyruk",
            editor: "Stepper",
            editorParams: {
              'minimum': 0,
              'maximum': 11,
            },
          },
          {
            name: "Sol_Kuyruk",
            groupName: "Aynalı Kuyruk",
            displayName: "Sol Kuyruk",
            editor: "Stepper",
            editorParams: {
              'minimum': 0,
              'maximum': 11,
            },
          },
          {
            name: "Atlama",
            groupName: "Aynalı Kuyruk",
            displayName: "Atlama",
            editor: "Switch",
          },
        ],
      },
    };
  },
  methods: {
    send() {
      console.log("sexes :>> ", sexes);
    },
  },

};
</script>

<style lang="scss">
DataFormEditorLabel{
  font-size: 18;
  margin-bottom: 1;
  color: #990000;
}
DataFormEditorCore{
  font-size: 16;
  margin-bottom: 15;
}
</style>
