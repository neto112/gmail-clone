<template>
  <div id="HomeView" class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm">
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <IconComponent
          @click="deleteSelected"
          class="-m-2 -ml-2.5"
          iconString="trash"
          :iconSize="19"
          iconColor="#636363"
          text="Delete selected"
          hoverColor="hover:bg-gray-100"
        />
        <div class="text-xs text-gray-500">1-50 of 153</div>
      </div>
    </div>
    <!-- <div v-for="email in userStore.emails" :key="email">
      <MessageRow
        :id="email.id"
        :from="email.firstName + ' ' + email.lastName"
        :subject="email.subject"
        :body="email.body"
        :time="email.createdAt"
        :hasViewed="email.hasViewed"
        @selectedId="selectedId"
      />
    </div> -->
    <div>
      <MessageRow
        from="cristianorneto@gmail.com"
        subject="Test row 1"
        body="this is the body text"
        time="Jun 20 15:15"
      ></MessageRow>
      <MessageRow
        from="cristianorneto@gmail.com"
        subject="Test row 1"
        body="this is the body text"
        time="Jun 20 15:15"
      ></MessageRow>
    </div>
  </div>
</template>

<script setup>
import IconComponent from "@/components/IconComponent.vue";
import MessageRow from "@/components/MessageRow.vue";
</script>
