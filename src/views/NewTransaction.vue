<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="
                    inline-block
                    px-1
                    text-dark
                    border border-dark
                    rounded
                    text-sm
                    font-bold
                  "
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  type="text"
                  placeholder="0"
                  class="text-4xl text-dark outline-none"
                  id="total"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="
                  flex
                  w-10
                  text-right
                  leading-10
                  mr-4
                  flex-none
                  items-center
                "
              >
                <span
                  class="inline-block ml-auto rounded-full w-8 h-8 bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  type="text"
                  placeholder="Select a category"
                  class="text-xl text-dark outline-none w-full"
                  id="category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="
                  flex
                  w-10
                  text-right
                  leading-10
                  mr-4
                  flex-none
                  items-center
                "
              >
                <span class="flex-none w-10 mr-4">
                  <font-awesome-icon icon="fa-solid fa-note-sticky" />
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  type="text"
                  placeholder="Note"
                  class="text-dark outline-none w-full"
                  id="note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="date" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <font-awesome-icon icon="fa-solid fa-wallet" />
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <font-awesome-icon icon="fa-solid fa-calendar" />
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <div class="text-dark w-full">{{date}}</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-8">
      <button
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
        @click="isMoreDetail = true"
        v-if="isMoreDetail === false"
      >
        More Details
      </button>
    </div>
    <template v-if="isMoreDetail">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <font-awesome-icon icon="fa-solid fa-location" />
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <input
                    type="text"
                    placeholder="Select a location"
                    class="text-dark outline-none"
                    id="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="with person" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <font-awesome-icon icon="fa-solid fa-people-group" />
                  </span>
                </div>
                <div class="flex-1 py-2 border-b border-gray-100">
                  <input
                    type="text"
                    placeholder="With person"
                    class="text-dark outline-none"
                    id="with person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
       <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <font-awesome-icon icon="fa-solid fa-camera" />
                  </span>
                </div>
                <div class="flex-1 py-2">
                 <div class="w-full font-semibold">Upload photo</div>
                 <input type="file" id="file" class="w-0 h-0 overflow-hidden absolute" @change="onChangeFile">
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red my-3">{{errorFile}}</div>
      </div>
    </template>
    <button class="w-full" type="submit">Test Add</button>
  </form>
</template>

<script>
import {ref} from 'vue';
import {useUser} from '../composables/useUser';
import useCollection from '../composables/useCollection';
import useStorage from '../composables/useStorage';
export default {
  setup() {
    const {addRecord,error} = useCollection('transaction')
    const isMoreDetail = ref(false)
    const total = ref(0)
    const category = ref('')
    const note = ref('')
    const date = ref(new Date())
    const file = ref(null)
    const errorFile = ref('')
    const {getUser} = useUser()
    const user = getUser()
    const { uploadFile } = useStorage('transaction')
    const onChangeFile = (e) => {
       const fileValue = e.target.files[0]
       const fileType = ["image/png","image/jpeg"]
       console.log(fileValue,98);
       if (fileValue && fileType.includes(fileValue.type)) {
        file.value = fileValue
       } else {
        file.value = null
        errorFile.value = "Could not selected file"
       }
    }
    const onSubmit = async () => {
        if (file.value) await uploadFile(file.value)
        console.log('aaaa');
    //     const transaction = {
    //         total:parseInt(total.value),
    //         category:category.value,
    //         note:note.value,
    //         date:date.value,
    //         userId:user.uid
    //     }
    //     console.log('transaction',transaction);
    //    await addRecord(transaction,user.uid)
    //    console.log(error);
    //    console.log('created');
    };
    return {
      onSubmit,
      isMoreDetail,
      total,
      category,
      note,
      date,
      onChangeFile,
      errorFile
    };
  },
};
</script>

<style>
</style>