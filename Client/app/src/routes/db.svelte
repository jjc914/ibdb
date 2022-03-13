<script lang="ts">
  import { ref, onValue } from 'firebase/database'
  import { rtdb } from '../Lib/Firestore/firestoreSetup'

  const subjects = ref(rtdb, '/subjects')
  onValue(subjects, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
  })
</script>

<h1>TEST</h1>
