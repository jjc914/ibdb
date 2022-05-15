<script lang="ts">
  import { ref, onValue } from 'firebase/database'
  import { rtdb } from '../Lib/Firestore/firestoreSetup'

  const subjects = ref(rtdb, '/subjects')
  onValue(subjects, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
  })
  import { user, isLoggedIn } from '../stores/authStore'
  if (typeof window !== 'undefined') {
    if ($isLoggedIn === false) {
      window.location.replace('/')
    }
  }
</script>

<h1>TEST</h1>
