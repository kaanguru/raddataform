<template>
  <Page>
    <ActionBar>
      <Label class="font-bold text-indigo-100 font-mono" text="Kuş Giriş Ekranı" col="1" />
    </ActionBar>
    <GridLayout columns="*" rows="*" class="p-b-20 my-30 ">
      <RadDataForm :source="bird" :metadata="birdMetadata" :groups="groups" class="p-5" row="1"> </RadDataForm>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { PropertyGroup } from "nativescript-ui-dataform";
const sexes = [
  { key: "erkek", label: "Erkek" },
  { key: "disi", label: "Dişi" },
  { key: "bebek", label: "Bebek" },
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
        kusSiraNo: 0,
        Dogum_Tarihi: "",
        Cinsiyet: "",
        Notlar: "",
        Tepe: true,
        Turu: "",
        Sag_Kuyruk: null,
        Sol_Kuyruk: null,
        Atlama: false,
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
            validators: [
              { name: "MinimumLength", params: { length: 2, errorMessage: "isim 2 karakterden daha kısa olamaz" } },
              { name: "MaximumLength", params: { length: 24, errorMessage: "isim 24 karakterden daha uzun olamaz" } },
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
            validators: [
              {
                name: "RangeValidator",
                params: { minimum: 0, maximum: 11, errorMessage: "Ayna sayısı 11'den büyük olamaz" },
              },
            ],
          },
          {
            name: "Sol_Kuyruk",
            groupName: "Aynalı Kuyruk",
            displayName: "Sol Kuyruk",
            editor: "Stepper",
            validators: [
              {
                name: "RangeValidator",
                params: { minimum: 0, maximum: 11, errorMessage: "Ayna sayısı 11'den büyük olamaz" },
              },
            ],
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

<style lang="scss" scoped></style>
