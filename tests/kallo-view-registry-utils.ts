import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  ReviewCommented,
  ReviewDownvoted,
  ReviewPosted,
  ReviewUpvoted
} from "../generated/KalloViewRegistry/KalloViewRegistry"

export function createReviewCommentedEvent(
  locationId: Bytes,
  reviewId: Bytes,
  commentId: Bytes,
  author: Address
): ReviewCommented {
  let reviewCommentedEvent = changetype<ReviewCommented>(newMockEvent())

  reviewCommentedEvent.parameters = new Array()

  reviewCommentedEvent.parameters.push(
    new ethereum.EventParam(
      "locationId",
      ethereum.Value.fromFixedBytes(locationId)
    )
  )
  reviewCommentedEvent.parameters.push(
    new ethereum.EventParam("reviewId", ethereum.Value.fromFixedBytes(reviewId))
  )
  reviewCommentedEvent.parameters.push(
    new ethereum.EventParam(
      "commentId",
      ethereum.Value.fromFixedBytes(commentId)
    )
  )
  reviewCommentedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return reviewCommentedEvent
}

export function createReviewDownvotedEvent(
  locationId: Bytes,
  reviewId: Bytes,
  voter: Address
): ReviewDownvoted {
  let reviewDownvotedEvent = changetype<ReviewDownvoted>(newMockEvent())

  reviewDownvotedEvent.parameters = new Array()

  reviewDownvotedEvent.parameters.push(
    new ethereum.EventParam(
      "locationId",
      ethereum.Value.fromFixedBytes(locationId)
    )
  )
  reviewDownvotedEvent.parameters.push(
    new ethereum.EventParam("reviewId", ethereum.Value.fromFixedBytes(reviewId))
  )
  reviewDownvotedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )

  return reviewDownvotedEvent
}

export function createReviewPostedEvent(
  locationId: Bytes,
  reviewId: Bytes,
  author: Address
): ReviewPosted {
  let reviewPostedEvent = changetype<ReviewPosted>(newMockEvent())

  reviewPostedEvent.parameters = new Array()

  reviewPostedEvent.parameters.push(
    new ethereum.EventParam(
      "locationId",
      ethereum.Value.fromFixedBytes(locationId)
    )
  )
  reviewPostedEvent.parameters.push(
    new ethereum.EventParam("reviewId", ethereum.Value.fromFixedBytes(reviewId))
  )
  reviewPostedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return reviewPostedEvent
}

export function createReviewUpvotedEvent(
  locationId: Bytes,
  reviewId: Bytes,
  voter: Address
): ReviewUpvoted {
  let reviewUpvotedEvent = changetype<ReviewUpvoted>(newMockEvent())

  reviewUpvotedEvent.parameters = new Array()

  reviewUpvotedEvent.parameters.push(
    new ethereum.EventParam(
      "locationId",
      ethereum.Value.fromFixedBytes(locationId)
    )
  )
  reviewUpvotedEvent.parameters.push(
    new ethereum.EventParam("reviewId", ethereum.Value.fromFixedBytes(reviewId))
  )
  reviewUpvotedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )

  return reviewUpvotedEvent
}
