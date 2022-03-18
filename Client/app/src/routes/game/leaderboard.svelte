<style>
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #ffffff;
  }
</style>

<svelte:head>
  <title>index</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
  <div class="flex p-5 w-10/12 rounded-3xl drop-shadow-2xl">
    <div
      class="flex text-neutral-100 w-full bg-neutral-700 p-5 rounded-3xl
      drop-shadow-2xl ">
      <table
        class="w-full overflow-hidden align-middle border-gray-200 shadow
        sm:rounded-lg">
        <thead class="bg-neutral-500 ">
          <tr>
            <th
              scope="col"
              class="text-sm font-medium bg-neutral-300 text-gray-900 px-6 py-4
              text-left">
              #
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-neutral-100 px-6 py-4 text-left">
              Name
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-neutral-100 px-6 py-4 text-left">
              Question Right
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-neutral-100 px-6 py-4 text-left">
              % Right
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b transition duration-300 ease-in-out
            hover:bg-gray-100">
            <td
              class="px-6 py-4 whitespace-nowrap text-sm font-medium
              text-gray-900">
              1
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4
              whitespace-nowrap">
              Arctesian
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4
              whitespace-nowrap">
              420
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4
              whitespace-nowrap">
              69%
            </td>

          </tr>
          <tr
            class="bg-white border-b transition duration-300 ease-in-out
            hover:bg-gray-100">
            <td
              class="px-6 py-4 whitespace-nowrap text-sm font-medium
              text-gray-900">
              2
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4
              whitespace-nowrap">
              TheArctesian
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4
              whitespace-nowrap">
              69
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4
              whitespace-nowrap">
              69%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
