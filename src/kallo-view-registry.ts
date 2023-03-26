import {
  ReviewCommented as ReviewCommentedEvent,
  ReviewDownvoted as ReviewDownvotedEvent,
  ReviewPosted as ReviewPostedEvent,
  ReviewUpvoted as ReviewUpvotedEvent
} from "../generated/KalloViewRegistry/KalloViewRegistry"
import {
  ReviewCommented,
  ReviewDownvoted,
  ReviewPosted,
  ReviewUpvoted
} from "../generated/schema"

export function handleReviewCommented(event: ReviewCommentedEvent): void {
  let entity = new ReviewCommented(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.locationId = event.params.locationId
  entity.reviewId = event.params.reviewId
  entity.commentId = event.params.commentId
  entity.author = event.params.author

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReviewDownvoted(event: ReviewDownvotedEvent): void {
  let entity = new ReviewDownvoted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.locationId = event.params.locationId
  entity.reviewId = event.params.reviewId
  entity.voter = event.params.voter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReviewPosted(event: ReviewPostedEvent): void {
  let entity = new ReviewPosted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.locationId = event.params.locationId
  entity.reviewId = event.params.reviewId
  entity.author = event.params.author

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReviewUpvoted(event: ReviewUpvotedEvent): void {
  let entity = new ReviewUpvoted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.locationId = event.params.locationId
  entity.reviewId = event.params.reviewId
  entity.voter = event.params.voter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
