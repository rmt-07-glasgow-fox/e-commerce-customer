<template>
  <tr>
    <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm w-2/5">
      <div class="flex">
      <div class="w-45">
        <img class="h-24" :src="transaction.Product.image_url">
      </div>
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span class="font-bold text-sm my-auto">{{ transaction.Product.name }}</span>
      </div>
    </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap text-center">{{ transaction.total_price / transaction.Product.price }}</p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap text-center">
            Rp. {{ transaction.total_price }}
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap text-center">
            {{ transaction.updatedAt.split('T')[0] }}
        </p>
    </td>
</tr>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['transaction']
}
</script>

<style>

</style>
